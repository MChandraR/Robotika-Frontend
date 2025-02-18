"use client"
import AdminLayout from "@/components/Layout/AdminLayout";
import TextEditor from "@/components/Element/TextEditor";
import { useState } from "react";
import InputField from "@/components/Element/InputField";
import FileInput from "@/components/Element/FileInput";
import { Member } from "@/service/api";
import { showDialog } from "@/components/Utils/alertUtils";

export default function Page(){
    const [name, setName]  = useState("");
    const [image, setImage] = useState<File|null>(null);
    const [period , setPeriod]  = useState(String(new Date().getFullYear() ));
    const [role , setRole]  = useState("");
    const [roleType , setRoleType]  = useState("");
    const [description , setDescription]  = useState("");

    const handleSubmit = ()=>{
        console.log("Proses");
        
        if(name==="" || period === "" || role === "" || !image || roleType === "" || description === "" ){
            showDialog("error", "Error", "Harap isi data lengkap !");
            return;
        }
        
        const parser = new FileReader();
        if(image) parser.readAsDataURL(image);
        parser.onload = async ()=>{
            Member.addMember({
                name : name,
                image : parser.result as string ?? "", 
                period : parseInt(period)??0,
                role : role,
                role_type : roleType,
                description : description
            }).then((response)=>{

                showDialog(
                    response.status == 200 ? "success" : "error",
                    response.status == 200 ? "Berhasil" : "Gagal",
                    response.message);
                if(response.status===200){
                    setName("");
                    setPeriod(String(new Date().getFullYear()));
                    setRole("");
                    setRoleType("");
                    setImage(null);
                    setDescription("");
                }
            });


        }

       
    }

    return (
        <AdminLayout>
            <div className="px-4">
                <div className="mb-8 uppercase text-primaryYellow font-bold text-2xl">Tambahkan data anggota baru</div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="flex flex-col ">
                        <div className="text-darkerBlue font-bold">Nama Anggota</div>
                        <InputField className="text-black" value={name} onChange={(e)=>setName(e.target.value)}/>
                        
                        <div className="mt-5 text-darkerBlue font-bold">Masukkan Deskripsi anggota</div>
                        <TextEditor 
                        placeholder="" value={description} onChange={(e:string)=>setDescription(e)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-darkerBlue font-bold">Periode Jabatan</div>
                        <InputField value={period} onChange={(e)=>setPeriod(e.target.value)} type="number" className="text-black"/>

                        <div className="mt-4 text-darkerBlue font-bold">Upload Gambar</div>
                        <FileInput imageFile={image} setImageFile={(file:File|null)=>setImage(file)}/>
                    
                        <div className="mt-4 text-darkerBlue font-bold">Masukkan Nama Jabatan</div>
                        <InputField value={role} onChange={(e)=>setRole(e.target.value)} type="text" className="text-black"/>

                        <div className="mt-4 text-darkerBlue font-bold">Masukkan Tipe Jabatan</div>
                        <select 
                            className="w-full border-2 text-black border-dark0_15 rounded-md leading-16 py-4 px-4" 
                            value={roleType} 
                            onChange={(e) => setRoleType(e.target.value)}
                        >
                            <option value="">Pilih Kategori</option>
                            <option value="pengurus">Pengurus</option>
                            <option value="anggota">Anggota</option>
                        </select>
                    </div>
                </div>

                <button 
                onClick={()=>handleSubmit()}
                className="mt-8 md:mt-4 bg-primaryBlue text-white rouded-md px-4 py-2">
                    Submit
                </button>
            </div>
        </AdminLayout>
    );
}