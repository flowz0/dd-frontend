import { BlogProps } from "@/types/blog";
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API_URL;

export async function getAllBlogs(): Promise<BlogProps[]> {
  try {
    const res = await axios.get(`${api}/api/blogs`, { withCredentials: true });
    if (!Array.isArray(res.data)) {
      throw new Error("Invalid response: expected an array of blogs");
    }
    return res.data;
  } catch (error) {
    console.log("Error fetching blogs", error);
    return [];
  }
}

export async function getBlogById(id: string): Promise<BlogProps | null> {
  try {
    const res = await axios.get(`${api}/api/blogs/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200 && res.data) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}`, error);
    return null;
  }
}