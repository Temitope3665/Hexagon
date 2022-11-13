import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import RelatedDrugs from "../LatestNews/relatedDrugs";

const ProductDetailsTemp = () => {

  return (
    <Flex w="100%">
      <Box w="70%">
        <Box bg="brand.white" p="40px" color="#3A3A3ABF">
          <Text color="brand.dark" fontWeight="600" fontSize="20px">
            Brand name: Panadol 
          </Text>
          <Text mt="10px">
            Generic name: paracetamol
            Brand names: Panadol
            Dosage form: effervescent tablet, intravenous (infusion) injection, orally disintegrating tablet, oral capsule, oral powder, oral suspension, oral tablet, suppository
            Drug class: Miscellaneous analgesics
          </Text>

          <Text color="brand.dark" fontWeight="600" fontSize="20px" mt="30px">
            Brand name: Panadol 
          </Text>
          <Text mt="10px">
            Generic name: paracetamol
            Brand names: Panadol
            Dosage form: effervescent tablet, intravenous (infusion) injection, orally disintegrating tablet, oral capsule, oral powder, oral suspension, oral tablet, suppository
            Drug class: Miscellaneous analgesics
          </Text>

          <Text color="brand.dark" fontWeight="600" fontSize="20px" mt="30px">
          Uses of Panadol
          </Text>
          <Text mt="10px">
            GThis drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, back pain, osteoarthritis, or cold/flu aches and pain) and to reduce fever.
          </Text>

          <Text color="brand.dark" fontWeight="600" fontSize="20px" mt="30px">
          Instructions
          </Text>
          <Text mt="10px">
            - Always use exactly as your doctor or pharmacist tells you to
          </Text>
          <Text mt="10px">
            - Always read the instructions on your medication before taking it
          </Text>
          <Text mt="10px">
            - Paracetamol may be taken every 4 to 6 hours. Leave at least 4 hours between doses.
          </Text>

          <Text color="brand.dark" fontWeight="600" fontSize="20px" mt="30px">
          Overdose
          </Text>
          <Text mt="10px">
          - Taking Panadol Tab at high doses may result in serious damage to the liver.
          </Text>
        </Box>
      </Box>

      <Box w="30%" ml="20px">
        <RelatedDrugs />
      </Box>
    </Flex>
  );
};

export default ProductDetailsTemp;
