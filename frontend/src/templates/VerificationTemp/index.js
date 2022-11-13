import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import VerificationIcon from "../../assets/icons/verification-icon.png";
import CustomButton from "../../components/CustomButton/customButton";
import TextInput from "../../components/TextInputs/TextInput";
import LatestNews from "../LatestNews";

const VerificationTemp = () => {
  return (
    <Flex w="100%">
      <Box w="70%">
        <SimpleGrid
          columns={2}
          bg="brand.blue"
          alignItems="center"
          p="40px 20px"
          borderRadius="8px"
        >
          <Box>
            <Text color="brand.white" fontSize="28px">
              Confirm authenticity of your drugs
            </Text>
            <Text color="brand.lightGrey">
              This is established in identifying authentic drugs with emphasis
              on identifying the production and manufacturing dates using an
              interactive method.
            </Text>
          </Box>
          <Box ml="40px">
            <Image src={VerificationIcon} alt="dahsboard-home-icon" />
          </Box>
        </SimpleGrid>

        <Box bg="brand.white" p="40px" mt="40px" borderRadius="8px">
          <Text fontSize="20px">Enter product ID to verify</Text>
          <Text>Please follow the steps below to authenticate your drugs</Text>
          <TextInput placeholder="Enter unique code" />
        </Box>

        <Box mt="50px" bg="brand.white" p="40px" color="#3A3A3ABF">
          <Text color="brand.dark" fontSize="20px">
            How to get a product ID number;
          </Text>
          <Text mt="10px">
            1. After purchasing a particular product at the nearest pharmacy,
          </Text>
          <Text mt="10px">
            2. Kindly check round the product for a description “scratch pin
            here”,
          </Text>
          <Text mt="10px">
            3. Gently scratch the panel, to know the unique code assigned to
            each product,
          </Text>
          <Text mt="10px">
            4. Input the unique code as seen exactly on the product inside the
            box above to verify its authenticity.
          </Text>
        </Box>
      </Box>

      <Box w="30%" ml="20px">
        <LatestNews />
      </Box>
    </Flex>
  );
};

export default VerificationTemp;
