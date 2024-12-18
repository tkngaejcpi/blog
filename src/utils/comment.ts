import { getCollection } from 'astro:content';

import { type Comment } from '@models/Comment';

import { type Opr, id as _id, take } from '@utils/functional';

type Comments = Comment[];
export type CommentFilter = Opr<Comments>;

export const queryAll = async () =>
	(await getCollection('comments')).flatMap((commentSet) => commentSet.data);

export const filterByPost: (postId: string) => CommentFilter =
	(postId) => (comments) =>
		comments.filter((comment) => comment.post.id == postId);

export const sortByDate: CommentFilter = (comments) =>
	comments.sort((b, a) => a.createdTime.getTime() - b.createdTime.getTime());

export const limit: (n: number) => CommentFilter = (n) => (comments) =>
	take<Comment>(n)(comments);