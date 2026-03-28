import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, ChevronLeft, ChevronRight, Menu, Moon, Search, SunMedium, X } from 'lucide-react';

import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { cn } from '@/lib/utils';

const shellTheme = {
  light: {
    page: 'text-foreground',
    sidebar: 'border-border bg-card/80',
    topbar: 'border-border bg-card/80',
    input: 'border-border bg-card text-foreground placeholder:text-muted-foreground',
    body: 'text-muted-foreground',
    heading: 'text-foreground',
    muted: 'text-muted-foreground',
    activeLink:
      'border-primary/30 bg-primary/10 text-primary shadow-[var(--shadow-card)]',
    idleLink:
      'border-transparent text-muted-foreground hover:border-border hover:bg-card/80 hover:text-foreground',
    action: 'border-border bg-card/90 text-foreground hover:border-primary/40 hover:text-foreground',
  },
  dark: {
    page: 'text-foreground',
    sidebar: 'border-border bg-card/40',
    topbar: 'border-border bg-card/40',
    input: 'border-border bg-card text-foreground placeholder:text-muted-foreground',
    body: 'text-muted-foreground',
    heading: 'text-foreground',
    muted: 'text-muted-foreground',
    activeLink:
      'border-primary/30 bg-primary/10 text-primary shadow-[var(--shadow-card)]',
    idleLink:
      'border-transparent text-muted-foreground hover:border-border hover:bg-card/60 hover:text-foreground',
    action: 'border-border bg-card/80 text-foreground hover:border-primary/40 hover:text-foreground',
  },
};

const NavRail = ({ brand, navItems, theme, collapsed, onCollapseToggle, onNavigate, footer }) => {
  const palette = shellTheme[theme];

  return (
    <ERPSurfaceCard
      hover={false}
      className={cn(
        'sticky top-6 h-[calc(100vh-3rem)] rounded-[32px] p-4 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)]',
        palette.sidebar,
        collapsed ? 'w-24' : 'w-full max-w-[300px]'
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <Link className="flex min-w-0 items-center gap-3" to={brand.href}>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-3xl text-primary-foreground shadow-[var(--shadow-card-hover)]"
              style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
            >
              <brand.icon className="h-6 w-6" />
            </div>
            {!collapsed ? (
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  {brand.eyebrow}
                </p>
                <p className={cn('truncate text-lg font-semibold', palette.heading)}>{brand.title}</p>
              </div>
            ) : null}
          </Link>

          <button
            type="button"
            onClick={onCollapseToggle}
            className={cn(
              'hidden h-10 w-10 items-center justify-center rounded-2xl border transition lg:inline-flex',
              palette.action
            )}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {!collapsed ? <p className={cn('mt-4 text-sm leading-6', palette.body)}>{brand.description}</p> : null}

        <div className="mt-6 flex-1 space-y-1.5 overflow-y-auto pr-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'group flex items-center gap-3 rounded-3xl border px-3 py-3 transition',
                  isActive ? palette.activeLink : palette.idleLink,
                  collapsed ? 'justify-center px-0' : ''
                )
              }
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15">
                <item.icon className="h-5 w-5" />
              </span>
              {!collapsed ? (
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{item.label}</span>
                  {item.caption ? (
                    <span className={cn('block truncate text-xs', palette.muted)}>{item.caption}</span>
                  ) : null}
                </span>
              ) : null}
              {!collapsed && item.badge ? (
                <span className="rounded-full bg-slate-900/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {item.badge}
                </span>
              ) : null}
            </NavLink>
          ))}
        </div>

        {footer ? (
          <div className={cn('mt-4 rounded-[28px] border p-4 text-sm', palette.action)}>
            {typeof footer === 'function' ? footer({ collapsed }) : footer}
          </div>
        ) : null}
      </div>
    </ERPSurfaceCard>
  );
};

const MobileRail = ({ open, onClose, ...props }) => (
  <AnimatePresence>
    {open ? (
      <motion.div
        className="fixed inset-0 z-[90] bg-slate-950/50 px-4 py-6 backdrop-blur-sm lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="flex h-full max-w-sm"
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -24, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-full">
            <NavRail {...props} collapsed={false} onNavigate={onClose} />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);

const ThemeToggle = ({ theme, onToggle }) => {
  const palette = shellTheme[theme];

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn('inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition', palette.action)}
    >
      {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

const ErpShell = ({
  brand,
  navItems,
  title,
  description,
  children,
  actions,
  footer,
  profile,
  notificationCount = 0,
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search workspace',
  theme = 'light',
  onThemeToggle,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const palette = shellTheme[theme];

  const actionNodes = useMemo(
    () =>
      (actions || []).map((action) => (
        <div key={action.key || action.label} className="shrink-0">
          {action.node}
        </div>
      )),
    [actions]
  );

  return (
    <ERPBackdrop className={cn('min-h-screen py-6 sm:py-8', theme === 'dark' ? 'bg-slate-950' : '')}>
      <div className={cn('mx-auto max-w-[1600px]', palette.page)}>
        <MobileRail
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          brand={brand}
          navItems={navItems}
          theme={theme}
          footer={footer}
          onCollapseToggle={() => {}}
        />

        <div
          className={cn(
            'grid gap-6 lg:grid-cols-[auto,1fr]',
            collapsed ? 'lg:grid-cols-[96px,1fr]' : 'lg:grid-cols-[300px,1fr]'
          )}
        >
          <div className="hidden lg:block">
            <NavRail
              brand={brand}
              navItems={navItems}
              theme={theme}
              collapsed={collapsed}
              onCollapseToggle={() => setCollapsed((current) => !current)}
              footer={footer}
            />
          </div>

          <div className="min-w-0 space-y-6">
            <ERPSurfaceCard
              hover={false}
              className={cn(
                'rounded-[32px] p-4 sm:p-5',
                palette.topbar,
                theme === 'dark' ? 'shadow-[0_28px_70px_-38px_rgba(15,23,42,0.72)]' : ''
              )}
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition lg:hidden',
                      palette.action
                    )}
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{brand.eyebrow}</p>
                    <h1 className={cn('mt-1 text-2xl font-semibold tracking-tight sm:text-3xl', palette.heading)}>{title}</h1>
                    {description ? <p className={cn('mt-2 max-w-3xl text-sm leading-6', palette.body)}>{description}</p> : null}
                  </div>
                </div>

                <div className="flex flex-col gap-3 xl:items-end">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {onSearchChange ? (
                      <label className="relative min-w-[240px] flex-1">
                        <Search className={cn('pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2', palette.muted)} />
                        <input
                          value={searchValue}
                          onChange={onSearchChange}
                          placeholder={searchPlaceholder}
                          className={cn(
                            'h-11 w-full rounded-2xl border pl-10 pr-4 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15',
                            palette.input
                          )}
                        />
                      </label>
                    ) : null}
                    {onThemeToggle ? <ThemeToggle theme={theme} onToggle={onThemeToggle} /> : null}
                    <div className={cn('inline-flex h-11 min-w-[52px] items-center justify-center gap-2 rounded-2xl border px-3 text-sm font-semibold', palette.action)}>
                      <Bell className="h-4 w-4" />
                      <span>{notificationCount}</span>
                    </div>
                    <div className={cn('inline-flex h-11 items-center gap-3 rounded-2xl border px-3 text-sm', palette.action)}>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-2xl text-xs font-semibold text-primary-foreground"
                        style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
                      >
                        {String(profile?.label || 'A')
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div className="hidden text-left sm:block">
                        <p className={cn('text-sm font-semibold', palette.heading)}>{profile?.label || 'ERP User'}</p>
                        {profile?.caption ? <p className={cn('text-xs', palette.muted)}>{profile.caption}</p> : null}
                      </div>
                    </div>
                    {actionNodes}
                  </div>
                </div>
              </div>
            </ERPSurfaceCard>

            <div>{children}</div>
          </div>
        </div>
      </div>
    </ERPBackdrop>
  );
};

export default ErpShell;
