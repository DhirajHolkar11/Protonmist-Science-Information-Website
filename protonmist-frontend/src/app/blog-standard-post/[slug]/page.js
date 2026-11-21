

import { client } from '../../../../sanity';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '../../../components/PortableTextComponents';
import '../../../styles/blogstandard-page.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const query = `
    *[_type == "topic" && slug.current == $slug][0] {
      title
    }
  `;
  const post = await client.fetch(query, { slug });

  const baseUrl = 'https://www.informationcave.com'; // ⬅️ Replace with your actual domain, no trailing slash

  return {
    title: post?.title || 'Science Blog',
    description: `Read more about ${post?.title || 'amazing science topics'}.`,
    alternates: {
      canonical: `${baseUrl}/blog-standard-post/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const query = `
    *[_type == "topic" && slug.current == $slug][0] {
      title,
      intro,
      content[] {
        ...,
        _type == "image" => {
          ...,
          asset->{
            _id,
            url
          }
        }
      }
    }
  `;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div className='blogsstandard-loading'>Loading post...</div>;
  }

  return (
    <div className="blogstandard-container">
      <div className="blogstandard-title">{post.title}</div>
      <p className="blogstandard-intro">{post.intro}</p>

      <div className="blogstandard-content">
        <PortableText value={post.content} components={PortableTextComponents} />
      </div>
    </div>
  );
}
