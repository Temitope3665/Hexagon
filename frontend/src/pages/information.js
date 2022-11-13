import { Box, Text } from "@chakra-ui/react"
import DashboardContainer from "../container/dashboardContainer";

const InformationHome = () => {
    return (
        <Box>
            <DashboardContainer>
                <Box p="20px">
                    <Text fontSize="50px">Information Container</Text>
                </Box>
            </DashboardContainer>
        </Box>
    )
};

export default InformationHome;