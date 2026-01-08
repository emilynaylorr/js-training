function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(1, 2));

// interface Email {
// can set up rules etc and nest it into the User interface
// }

interface AvatarPic {
  id: number;
  imageUrl: string;
}

interface User {
  id: number;
  name: string;
  avatarPic?: AvatarPic;
  email?: string;
}

interface Admin extends User {
  // Extends means everything in user plus admin
  permissions: boolean;
}

const user: User = {
  // User tells us that it is expecting a User interface & its rules
  id: 1,
  name: "Emily",
  email: "1242323", // Has to be string or it will throw a red squiggly line
};

const user1: Admin = {
  id: 1,
  name: "Emily",
  permissions: true,
};
