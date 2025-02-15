import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const BlogPosts = () => {
     
    const boxRef = useRef(null);

  useEffect(() => {
     // Create a timeline for the animations
     const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top bottom",
        end: "50%", // Adjust this value as needed
        scrub: true,
      },
    });

    // Add animations to the timeline
    tl.from(boxRef.current, {
      scale: 0.5,
      duration: 1,
    })
    .to(boxRef.current, {
      scale: 1, // Scale to 1.1
    });

    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("https://fourativisuals.com/wp-json/wp/v2/posts?per_page=3");
                const data = await response.json();
                
                // Fetch thumbnail for each article
                const articlesWithMedia = await Promise.all(data.map(async article => {
                    const mediaResponse = await fetch(`https://fourativisuals.com/wp-json/wp/v2/media/${article.featured_media}`);
                    const mediaData = await mediaResponse.json();
                    return { ...article, thumbnail: mediaData.source_url };
                }));

                setArticles(articlesWithMedia);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section ref={boxRef} className="grid items-center justify-center full mx-auto min-h-[500px]  rounded-md mt-100">
            <h2 className="section-headline text-8xl p-6 text-gray-800">News</h2>
            
                <ul className="grid md:grid-cols-3 gap-8 items-center p-6">
                    {articles.map(article => (
                        <li className="blog-article-home" key={article.id}>
                            <img src={article.thumbnail} alt={article.title.rendered} />
                            <p className="date">
                            {new Date(article.date).getDate()}<br />
                            {new Date(article.date).toLocaleString('default', { month: 'short' })}
                              </p>
                            <div className="content">
                              <h3 className="text-4xl text-gray-800">{article.title.rendered}</h3>
                              
                              <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered.slice(0, 150) + (article.excerpt.rendered.length > 150 ? '...' : '') }} />
                              <a href={article.link} className=" hover:bg-blue-800">Read More</a>
                            </div>
                        </li>
                    ))}
                </ul>
            
        </section>
    );
};

export default BlogPosts;