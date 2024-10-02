import { Post } from "./post.types";

export type Post2 = Pick<Post, 'title'|'subtitle'|'slug'|'author'|'publicationDate'>