import { z } from "zod";

export const personalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  date_of_birth: z.string().min(1),
  gender: z.string(),
  blood_group: z.string().min(1),
  aadhaar_number: z.string().min(12, "Invalid Aadhaar"),
  category: z.string(),
  religion: z.string(),
  nationality: z.string(),
});

export const academicSchema = z.object({
  program: z.string().min(1),
  intermediate_college_name: z.string().min(1),
  intermediate_board: z.string().min(1),
  total_marks: z.string().min(1),
  marks_obtained: z.string().min(1),
  result_type: z.string(),
  aggregate_percentage: z.string().min(1),
});

export const addressSchema = z.object({
  father_name: z.string().min(1),
  mother_name: z.string().min(1),
  local_guardian_name: z.string().min(1),
  guardian_mobile_number: z.string().min(10),
  correspondence_address: z.string().min(1),
});

export const documentSchema = z.object({
  admission_application_id: z.string().min(1),
  college_name: z.string().min(1),
  course_name: z.string().min(1),
  honours_subject: z.string().min(1),
  session: z.string().min(1),
});
