import { NextPage } from 'next';
import { useState } from 'react';
import Introduction from '@views/Introduction';
import SideBarLayout from '@components/SideBarLayout';
import HeaderLayout from '@components/HeaderLayout';

const Home: NextPage = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <SideBarLayout open={open}>
            <HeaderLayout onMenu={() => setOpen(state => !state)}>
                <Introduction/>
            </HeaderLayout>
        </SideBarLayout>
    );
};

export default Home;
