import { ChangeEvent, useState } from "react";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";

const Home: React.FC = () => {

    const [input, setInput] = useState<string>('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    }

    return (
        <div>
            <Box>
                <h1>Home</h1>
                <Typography variant="h1">Cool</Typography>

                <Button variant="accent" disabled={!input} onClick={() => console.log('cool')}>Test Button</Button>

                
                <input type="text"  onChange={changeHandler} />
            </Box>
        </div>
    )
}

export default Home;
