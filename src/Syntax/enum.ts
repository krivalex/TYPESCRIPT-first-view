enum EnumRole {
  Admin = 1,
  User = 2,
  Guest = 3,
}

let userRole: EnumRole = EnumRole.Admin
console.log(userRole) // 1

let userRole2: EnumRole = EnumRole.User
console.log(userRole2) // 2

let userRole3: EnumRole = EnumRole.Guest
console.log(userRole3) // 3
