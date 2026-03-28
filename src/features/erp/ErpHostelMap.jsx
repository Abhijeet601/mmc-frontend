import { motion } from 'framer-motion';
import { BedDouble, Building2, Layers3 } from 'lucide-react';

import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { cn } from '@/lib/utils';

import { getRoomOccupancyTone, getRoomToneClasses, groupRoomsByHierarchy } from './erp-utils';

const legendItems = [
  { key: 'available', label: 'Available' },
  { key: 'warning', label: 'Almost full' },
  { key: 'full', label: 'Full' },
];

const bedDotClass = (filled, theme) =>
  cn(
    'h-3 w-3 rounded-full border',
    filled
      ? theme === 'dark'
        ? 'border-blue-400 bg-blue-400'
        : 'border-blue-500 bg-blue-500'
      : theme === 'dark'
        ? 'border-slate-700 bg-slate-900'
        : 'border-slate-300 bg-white'
  );

const ErpHostelMap = ({ rooms = [], theme = 'light', onRoomSelect, selectedRoomId }) => {
  const hierarchy = groupRoomsByHierarchy(rooms);
  const frameClass =
    theme === 'dark'
      ? 'border-slate-800 bg-slate-950/82 text-slate-100'
      : 'border-white/70 bg-white/88 text-slate-900';

  const mutedClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <ERPSurfaceCard hover={false} className={cn('rounded-[32px] border p-5 sm:p-6', frameClass)}>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">Hostel Visualization</p>
          <h3 className="mt-2 text-2xl font-semibold">Hostel, block, floor, room, and bed hierarchy</h3>
          <p className={cn('mt-2 max-w-2xl text-sm leading-6', mutedClass)}>
            Allocation teams can inspect live room density, review free beds, and jump straight into manual allocation.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {legendItems.map((item) => (
            <span
              key={item.key}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]',
                getRoomToneClasses(item.key, theme)
              )}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-current" />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {Object.entries(hierarchy).map(([hostelName, blocks]) => (
          <div key={hostelName} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1D4ED8,#38BDF8)] text-white">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <h4 className="text-lg font-semibold">{hostelName}</h4>
                <p className={cn('text-sm', mutedClass)}>{Object.keys(blocks).length} blocks monitored</p>
              </div>
            </div>

            {Object.entries(blocks).map(([blockName, floors]) => (
              <div
                key={`${hostelName}-${blockName}`}
                className={cn(
                  'rounded-[28px] border p-4',
                  theme === 'dark' ? 'border-slate-800 bg-slate-900/70' : 'border-slate-200 bg-slate-50/80'
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5">
                    <Layers3 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">Block {blockName}</p>
                    <p className={cn('text-sm', mutedClass)}>{Object.keys(floors).length} floor groups</p>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {Object.entries(floors).map(([floorLabel, floorRooms]) => (
                    <div key={`${blockName}-${floorLabel}`} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{floorLabel}</p>
                        <p className={cn('text-xs uppercase tracking-[0.18em]', mutedClass)}>
                          {floorRooms.length} rooms
                        </p>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
                        {floorRooms.map((room, index) => {
                          const tone = getRoomOccupancyTone(room);
                          const occupiedBeds = Number(room.occupied_beds || 0);
                          const bedCapacity = Number(room.bed_capacity || 0);
                          const isSelected = selectedRoomId === room.id;

                          return (
                            <motion.button
                              key={room.id}
                              type="button"
                              onClick={() => onRoomSelect?.(room)}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.02 }}
                              className={cn(
                                'rounded-[26px] border p-4 text-left transition',
                                getRoomToneClasses(tone, theme),
                                isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:-translate-y-0.5',
                                theme === 'dark' ? 'ring-offset-slate-950' : 'ring-offset-white'
                              )}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">Room</p>
                                  <p className="mt-1 text-lg font-semibold">{room.room_number}</p>
                                </div>
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 text-current shadow-sm dark:bg-slate-950/50">
                                  <BedDouble className="h-4 w-4" />
                                </span>
                              </div>

                              <div className="mt-4 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  {Array.from({ length: bedCapacity }).map((_, bedIndex) => (
                                    <span key={`${room.id}-bed-${bedIndex}`} className={bedDotClass(bedIndex < occupiedBeds, theme)} />
                                  ))}
                                </div>
                                <span className="text-sm font-semibold">
                                  {occupiedBeds}/{bedCapacity}
                                </span>
                              </div>

                              <div className="mt-3 text-xs font-medium uppercase tracking-[0.16em] opacity-80">
                                {room.available_beds} beds available
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ERPSurfaceCard>
  );
};

export default ErpHostelMap;
