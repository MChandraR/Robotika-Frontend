"use client"

import AdminLayout from "@/components/Layout/AdminLayout"
import MyTable from "@/components/Element/MyTable"
import { useEffect, useState } from "react";
import { PostType } from "@/type/postType";
import { Post } from "@/service/api";
import { showConfirmDialog, showToast } from "@/components/Utils/alertUtils";

export default function Page(){
  const [post, setPost] = useState<PostType[]|null>(null);
  useEffect(()=>{
    Post.getPost({filter : "1"}).then((response)=>{
      if(response?.data){
        setPost(response?.data);
      } 
    });
  },[]);

  const deleteData = async(id : string)=>{
    console.log(id);
    const acc = await showConfirmDialog("Hapus data " , "Apakah yakin ingin menghapus data ? ");
    if(!acc) return;
    Post.deletePost({id : id }).then((response)=>{
      const success = response.status == 200 ;
      showToast( success ? "success" : "error",response.message??"Error : Kesalahan saat menghapus data !" );
      if(success)      setPost((prev) => prev ? prev.filter((item) => item.id !== id) : prev);

    });
  }

  const columns = [
    {name: "ID", uid: "id", sortable: true, visible : false},
    {name: "TITLE", uid: "title", sortable: true, visible : true},
    {name: "TANGGAL", uid: "date", sortable: true, visible : true},
    {name: "KATEGORI", uid: "category", sortable: true, visible : true},
    {name: "ACTION", uid: "actions", sortable: false, visible : true},
  ];

  return(
    <AdminLayout>
      <MyTable 
      data={post??[]}  
      columns={columns} 
      index_key="id" 
      search_key={"title"} 
      add_url="/admin/post/add" 
      view_url="/post" 
      edit_url="/admin/post"
      onDelete={deleteData}>
        
      </MyTable>
    </AdminLayout>
  );
}