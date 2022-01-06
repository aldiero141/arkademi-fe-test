import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const Title = styled.div`
    font-weight: 600;
    font-size: 1em;
`;

const AccordionContent = styled.div`
    font-weight: 500;
    font-size: 0.875em;
    display: grid;
    
    gap: 0;
    p{
        color: #0D78BF;
    }
`;

const Descriptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: start;
    justify-content: space-between;
    line-height: 0.5em;
`;

const Time = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5em;
    p{
        color: #333;
    }
`;

export default function SimpleAccordion() {
    const accordionStyle = {
        borderRadius: '0.5em',
        mb: '0.5em',
        "&:before": 
        { 
            backgroundColor: '#FFF'
        }
    }

    return (
        <div>
        <Accordion sx={accordionStyle}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Title>Pegantar</Title>
            </AccordionSummary>
            <AccordionDetails>
            <AccordionContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
            </AccordionContent>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Title>Mengapa belajar bahasa inggris</Title>
            </AccordionSummary>
            <AccordionDetails>
            <AccordionContent>
                <Descriptions>
                    <p>2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia</p>
                    <Time>
                        <img src='/image/clock.svg' alt='icon' height='15px'/>
                        <p>00:02:00</p>
                    </Time>
                </Descriptions>
                <Descriptions>
                    <p>3. Mengapa ada harus menguasai lebih dari satu bahasa</p>
                    <Time>
                        <img src='/image/clock.svg' alt='icon' height='15px'/>
                        <p>00:02:00</p>
                    </Time>
                </Descriptions>
                <Descriptions>
                    <p>4. Mengapa harus Bahasa Inggris</p>
                    <Time>
                        <img src='/image/clock.svg' alt='icon' height='15px'/>
                        <p>00:02:00</p>
                    </Time>
                </Descriptions>
            </AccordionContent>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Title>Tantangan belajar bahasa inggris</Title>
            </AccordionSummary>
            <AccordionDetails>
            <AccordionContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
            </AccordionContent>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
            >
            <Title>Cara menguasai bahasa inggris</Title>
            </AccordionSummary>
            <AccordionDetails>
            <AccordionContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
            </AccordionContent>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
            >
            <Title>Penutup</Title>
            </AccordionSummary>
            <AccordionDetails>
            <AccordionContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
            </AccordionContent>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}
