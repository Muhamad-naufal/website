"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Naufal",
    avatar: "N",
    title: "Software Engineer",
    description: "Keren Banget!! bikin apapun dari AI ini lebih kuencengg",
  },
  {
    name: "Dhilah",
    avatar: "D",
    title: "Designer",
    description: "Foto dan gambar yang keren banget cuma tinggal nulis",
  },
  {
    name: "Setya",
    avatar: "S",
    title: "CEO",
    description: "Nggak perlu ribet ribet lagi deh sekarang",
  },
  {
    name: "Deni",
    avatar: "D",
    title: "CFO",
    description: "Kerjaan kantor lebih mudah dan cepet selese kali gini mah!!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimoni</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}