import {FC, ReactNode} from "react";
import {PageContainer} from "./base-page.styles";
import Topbar from "../topbar/topbar.component";
import Navigation from "../navigation/navigation.component";

interface IPageContainer {
    children: ReactNode;
}

const BasePage: FC<IPageContainer> = ({children}) => (
    <PageContainer>
        <Topbar />
        <Navigation />
        <main>{children}</main>
    </PageContainer>
);

export default BasePage;