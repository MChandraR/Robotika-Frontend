"use client"

import AdminLayout from "@/components/Layout/AdminLayout"
import MyTable from "@/components/Element/MyTable"
import { useEffect, useState } from "react";
import { MemberType } from "@/type/member";
import { Member } from "@/service/api";
import { showConfirmDialog, showDialog } from "@/components/Utils/alertUtils";

export default function Page(){
  const [member, setMember] = useState<MemberType[]|null>(null);
  useEffect(()=>{
    Member.getMember().then((response)=>{
      if(response?.data){

        setMember(response?.data);
      } 
    });
  },[]);

  const deleteData = async(id : string)=>{
    console.log(id);
    const acc = await showConfirmDialog("Hapus data " , "Apakah yakin ingin menghapus data ? ");
    if(!acc) return;
    Member.deleteMember(id).then((response)=>{
        showDialog(response.status === 200 ? "success" : "error", response.message??"" );
        if(response.status == 200)setMember((items) => items ? items?.filter((item)=>item.id != id): member);
    });
  }

  const columns = [
    {name: "ID", uid: "id", sortable: true, visible : false},
    {name: "NAMA", uid: "name", sortable: true, visible : true},
    {name: "ROLE", uid: "role.name", sortable: true, visible : true},
    {name: "KATEGORI", uid: "role.type", sortable: true, visible : true},
    {name: "PERIODE", uid: "period", sortable: true, visible : true},
    {name: "ACTION", uid: "actions", sortable: false, visible : true},
  ];

  return(
    <AdminLayout>
      <MyTable 
      data={member??[]}  
      columns={columns} 
      index_key="id" 
      search_key={"name"} 
      add_url="/admin/anggota/add" 
      edit_url="/admin/anggota"
      onDelete={deleteData}>
        
      </MyTable>
    </AdminLayout>
  );
}