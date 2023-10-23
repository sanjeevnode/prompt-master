"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { data } from "autoprefixer";

const MyProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);

  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch(`/api/users/${params.id}`)
        .then(async (res) => {
          if (!res.ok) {
            router.push("/404");
          }
          return await res.json();
        })
        .then((data) => {
          setUser(data);
        });
      await fetch(`/api/users/${params.id}/posts`)
        .then(async (res) => {
          if (!res.ok) {
            router.push("/404");
          }
          return await res.json();
        })
        .then((data) => {
          setPosts(data);
        });
    };

    if (params.id) fetchPosts();
  }, [params.id]);
  return (
    <Profile
      name={user?.username}
      desc={`Welcome to ${user?.username}'s profile page.`}
      data={posts}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default MyProfile;
