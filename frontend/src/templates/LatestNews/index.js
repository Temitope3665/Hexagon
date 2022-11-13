import { Box, Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton/customButton";
import News1Img from "../../assets/icons/news1.png";
import Admin from "../../assets/icons/Admin-icon.png";

const LatestNews = () => {
  return (
    <Box w="100%" bg="white" borderRadius="8px" p="20px">
      <SimpleGrid columns={2} alignItems="center" justifyItems="space-between" width="100%">
        <Text>Latest News</Text>
        <CustomButton bg="#F5F5F5" borderRadius="8px">
          <Text color="#3A3A3ABF">View All</Text>
        </CustomButton>
      </SimpleGrid>

      <Box mt="20px">
        <Divider />

        <Flex justifyContent="space-evenly" fontSize="14px" mt="20px">
            <Image src={News1Img} w="70px" alt="news-img" />
            <Text ml="20px">Why Nigeria produces only 20% of essential medicines needs</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-evenly" fontSize="14px" mt="20px">
            <Image src={News1Img} w="70px" alt="news-img" />
            <Text ml="20px">Why Nigeria produces only 20% of essential medicines needs</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-evenly" fontSize="14px" mt="20px">
            <Image src={News1Img} w="70px" alt="news-img" />
            <Text ml="20px">Why Nigeria produces only 20% of essential medicines needs</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-evenly" fontSize="14px" mt="20px">
            <Image src={News1Img} w="70px" alt="news-img" />
            <Text ml="20px">Why Nigeria produces only 20% of essential medicines needs</Text>
        </Flex>

        <Flex alignItems="center" jusstifyContent="space-between" bg="brand.blue" mt="
        20px" p="20px">
            <Box color="white">
                <Text>Become an Admin</Text>
                <Text>Do you want to register as a manufacturer at HEXAGON?</Text>
                <CustomButton bg="white" mt="20px">
                    <Text color="brand.blue">SIGN UP</Text>
                </CustomButton>
            </Box>
            <Box>
                <Image src={Admin} w="150px" alt="admin" />
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default LatestNews;