import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="border-2 rounded-xl border-black transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-300 hover:duration-150"
    >
      <div className="p-4">
        {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
        <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </Link>
  );
};

export default PostPreview;