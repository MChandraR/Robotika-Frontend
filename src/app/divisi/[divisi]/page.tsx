export default async function Page({
    params,
  }: {
    params: Promise<{ divisi: string }>
  }){
    const divisi = (await params).divisi;
    return (

        <div className="relative min-h-[100dvh] p-6 pt-[8rem] w-full">
            <div className="text-black text-lg h-full">
                Divisi {divisi}
            </div>
        </div>
    );
}