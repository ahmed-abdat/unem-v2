import s1 from "@/constats/resulta/S1.json";
import s3 from "@/constats/resulta/S3.json";
import s5 from "@/constats/resulta/S5.json";
import { Student } from "@/lib/calculate-student-moyen-genral";

export const findStudent = (selectedSemester: string, id: string): Student[] => {
  let students: Student[] = [];

  if (selectedSemester === "s1") {
    students = s1.filter((student) => student.num === id) as Student[];
  } else if (selectedSemester === "s3") {
    students = s3.filter((student) => student.num === id);
  } else if (selectedSemester === "s5") {
    students = s5.filter((student) => student.num === id);
  }

  const key = 'mat';
  const uniqueStudents = Array.from(new Map(students.map(item => [item[key], item])).values());

  return uniqueStudents;
};