import { fetchEntries } from "../../../vendor/contentful-client";
import { useEffect, useState, useRef } from "react";
import {
  getPaginationQuery,
  OPTION,
  SKIP_GAP,
} from "../helper/configure-pagination";

const useInfiniteScroll = (initialSkip, initialPosts) => {
  const [posts, setPosts] = useState(initialPosts);
  const [skip, setSkip] = useState(initialSkip);
  const Sentinel = useRef();

  useEffect(() => {
    async function fetchPosts() {
      const newPosts = await fetchEntries(getPaginationQuery({ skip }));

      setPosts((prePosts) => [...prePosts, ...newPosts]);
    }

    fetchPosts();
  }, [skip]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        setSkip((preSkip) => preSkip + SKIP_GAP);
      });
    }, OPTION);

    observer.observe(Sentinel.current);

    return () => {
      observer.unobserve(Sentinel.current);
    };
  }, []);

  return { Sentinel, posts };
};

export default useInfiniteScroll;
