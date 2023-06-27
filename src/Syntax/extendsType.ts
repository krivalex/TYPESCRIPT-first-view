type TisNumber<T> = T extends number ? true : false
type TisString<T> = T extends string ? true : false

type Type1 = TisNumber<number> // true
type Type2 = TisNumber<string> // false
type Type3 = TisString<number> // false
type Type4 = TisString<string> // true

type CourseName = 'IT-JUNIOR' | 'IT-START' | 'IT-ADULT'
type CourseAge = '6-10' | '10-14' | '14+'

type Course = `${CourseName}-${CourseAge}`

const student1: Course = 'IT-JUNIOR-6-10'
const student2: Course = 'IT-START-10-14'
const student3: Course = 'IT-ADULT-14+'

type TisCourse<T> = T extends Course ? true : false

type Type5 = TisCourse<'IT-JUNIOR-6-10'> // true
type Type6 = TisCourse<'IT-START-10-14'> // true
type Type7 = TisCourse<'IT-ADULT-14+'> // true
type Type8 = TisCourse<'IT-JUNIOR-10-14'> // false

type TisCourse2<T> = T extends `${CourseName}-${infer Age}` ? Age : never

type Type9 = TisCourse2<'IT-JUNIOR-6-10'> // '6-10'
type Type10 = TisCourse2<'IT-START-10-14'> // '10-14'
type Type11 = TisCourse2<'IT-ADULT-14+'> // '14+'
type Type12 = TisCourse2<'IT-JUNIOR-10-14'> // never
