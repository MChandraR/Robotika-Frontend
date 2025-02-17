"use client"

import AdminLayout from "@/components/Layout/AdminLayout"
import MyTable from "@/components/Element/MyTable"
import { useEffect, useState } from "react";
import { PostType } from "@/type/postType";
import { Post } from "@/service/api";

export default function Page(){
  const [post, setPost] = useState<PostType[]|null>(null);
  useEffect(()=>{
    Post.getPost().then((response)=>{
      if(response?.data){
        setPost(response?.data);
      } 
    });
  },[]);

  const columns = [
    {name: "ID", uid: "id", sortable: true, visible : false},
    {name: "TITLE", uid: "title", sortable: true, visible : true},
    {name: "TANGGAL", uid: "date", sortable: true, visible : true},
    {name: "ACTION", uid: "actions", sortable: false, visible : true},
  ];

  return(
    <AdminLayout>
      <MyTable data={post??[]} columns={columns} index_key="id" search_key={"title"} add_url="/admin/post/add" view_url="/post">
        
      </MyTable>
    </AdminLayout>
  );
}