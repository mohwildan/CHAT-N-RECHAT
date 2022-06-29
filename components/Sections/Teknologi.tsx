import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Image1 from "../../public/main/Group 26.png";
import TeknologiBox from "../TeknologiBox";
import { BiConfused } from "react-icons/bi";

const Teknologi = () => {
  return (
    <Box pt="8rem">
      <Flex flexDir={{base: "column", md: "row"}}>
        <Box flex={1}>
          <Image src={Image1} />
        </Box>
        <Box flex={1} mt="2rem">
          <Heading as="h4" variant="badge">
            TEKNOLOGI YANG DIGUNAKAN
          </Heading>
          <Heading as="h2" mt="1.5rem" variant="section-title">
            Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
            Dan Jason Fried Pensiun! 
          </Heading>
          <Text mt="1.2rem" variant="section-description">
            Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara
            aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo
            pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap
            bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa
            gak usah daftar:
          </Text>
          <Box>
            <TeknologiBox
              icon={BiConfused}
              title="Kamu Adalah Beban Kami"
              dec="Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!"
            />
            <TeknologiBox
              icon={BiConfused}
              title="Males Buat Ngembangin"
              dec="Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin."
            />
            <TeknologiBox
              icon={BiConfused}
              title="Pokoknya Males Aja Lah"
              dec="Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah."
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Teknologi;
