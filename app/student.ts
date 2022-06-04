import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";

// relative to the server output not the source!
const studentsPath = path.join(__dirname, "..", "students");

export type Student = {
  slug: string;
  name: string;
};

export async function getStudents() {
  const dir = await fs.readdir(studentsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(studentsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      return {
        slug: filename.replace(/\.md$/, ""),
        name: attributes.name,
      };
    })
  );
}
