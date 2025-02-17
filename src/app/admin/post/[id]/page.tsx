
"use client"
import AdminLayout from "@/components/Layout/AdminLayout";
import TextEditor from "@/components/Element/TextEditor";
import { useEffect, useState } from "react";
import InputField from "@/components/Element/InputField";
import FileInput from "@/components/Element/FileInput";
import { Post } from "@/service/api";
import { showDialog } from "@/components/Utils/alertUtils";
import { useParams } from "next/navigation";
import { postStorageUrl } from "@/service/api";

export default function Page(){

    const [title, setTitle]  = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState<File|null|string>(null);
    const [category, setCategory] = useState("");
    const [url , setUrl]  = useState("");
    const param = useParams<{id : string}>();
    

    useEffect(()=>{
        Post.getPost({id : param.id}).then((response)=>{
            if(response.data){
                const data = response.data[0];
                const date = new Date(data.date);
                console.log(`${("00"+date.getDate()).slice(-2)}-${("00"+date.getMonth()).slice(-2)}-${date.getFullYear()}`);
                setTitle(data.title);
                setImage(`${postStorageUrl}/${data.image}`);
                setContent(data.content);
                setDate(`${date.getFullYear()}-${("00"+date.getMonth()).slice(-2)}-${("00"+date.getDate()).slice(-2)}`);
                setCategory(data.category??"");
                setUrl(data.url??"");
            }
        });
    },[param.id]);

    const handleSubmit = ()=>{
        console.log("Proses");

        console.log({
            title : title,
            category : category,
            content : content,
            date : date , 
            image :image, 
            url : url
        });
        
        if(title==="" || content === "" || date === "" || !image || category === "" ){
            showDialog("error", "Error", "Harap isi data lengkap !");
            return;
        }
        
        const parser = new FileReader();
        if(image && typeof image !== "string") {
            parser.readAsDataURL(image);
            parser.onload = async ()=>{
                console.log(parser.result);
                Post.updatePost({
                    id : param.id,
                    title : title,
                    category : category,
                    content : content,
                    date : date , 
                    tag : tag??"",
                    image : parser.result as string ?? "", 
                    url : url??""
                }).then((response)=>{
                    showDialog(
                        response.status == 200 ? "success" : "error",
                        response.status == 200 ? "Berhasil" : "Gagal",
                        response.message);
                });

            }


        }else{
            Post.updatePost({
                id : param.id,
                title : title,
                category : category,
                content : content,
                date : date , 
                tag : tag??"",
                url : url??""
            }).then((response)=>{
                showDialog(
                    response.status == 200 ? "success" : "error",
                    response.status == 200 ? "Berhasil" : "Gagal",
                    response.message);
            });
        }

       
    }

    return (
        <AdminLayout>
            <div className="px-4">
                <div className="mb-8 uppercase text-primaryYellow font-bold text-2xl">Tambahkan data postingan baru</div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="flex flex-col ">
                        <div className="text-darkerBlue font-bold">Judul Postingan</div>
                        <InputField className="text-black" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        
                        <div className="mt-5 text-darkerBlue font-bold">Masukkan isi postingan</div>
                        <TextEditor 
                        placeholder="" value={content} onChange={(e:string)=>setContent(e)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-darkerBlue font-bold">Tanggal Upload</div>
                        <InputField value={date} onChange={(e)=>setDate(e.target.value)} type="date" className="text-black"/>

                        <div className="mt-4 text-darkerBlue font-bold">Upload Gambar</div>
                        <FileInput  imageFile={image} setImageFile={(file:File|null)=>setImage(file)}/>
                    
                        <div className="mt-4 text-darkerBlue font-bold">Masukkan url eksternal ( Jika ada )</div>
                        <InputField value={url} onChange={(e)=>setUrl(e.target.value)} type="text" className="text-black"/>

                        <div className="mt-4 text-darkerBlue font-bold">Masukkan tag (&quot;Opsional&quot;)</div>
                        <InputField value={tag} onChange={(e)=>setTag(e.target.value)} type="text" className="text-black"/>

                        <div className="mt-4 text-darkerBlue font-bold">Masukkan category</div>
                        <select 
                            className="w-full border-2 text-black border-dark0_15 rounded-md leading-16 py-4 px-4" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Pilih Kategori</option>
                            <option value="informasi">Informasi</option>
                            <option value="berita">Berita</option>
                            <option value="event">Event</option>
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