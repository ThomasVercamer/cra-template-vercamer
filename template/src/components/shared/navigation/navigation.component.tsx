import {FC} from "react";
import {NavigationContainer} from "./navigation.styles";

interface INavigation {}

const Navigation: FC<INavigation> = () => (
    <NavigationContainer>
        <p>Navigation</p>
    </NavigationContainer>
);

export default Navigation;