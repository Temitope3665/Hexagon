import { Box, Text } from "@chakra-ui/react"
import DashboardContainer from "../container/dashboardContainer";

const VerificationHome = () => {
    return (
        <Box>
            <DashboardContainer>
                <Box p="20px">
                    <Text fontSize="50px">Verification Container</Text>
                </Box>
            </DashboardContainer>
        </Box>
    )
};

export default VerificationHome;