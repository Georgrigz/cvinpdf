import React from "react";
import { useReactToPrint } from 'react-to-print'
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Range from "./components/UI/Range";
// ui
import Avatar from "./components/UI/Avatar";
//layouts
import Title from "./components/UI/Title";
import Descr from "./components/UI/Descr";
import styled from "styled-components";

import "./assets/scss/main.scss"


const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`
const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`
const App = () => {
  const [skillsCounter, setSkillsCounter] = React.useState(1)
  const [worksCounter, setWorksCounter] = React.useState(1)
  const [educationCounter, seteducationCounter] = React.useState(1)

  const componentRef = React.useRef()
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className='ui-wrapper'>
      <Header onClick={handlePrintClick} />
      <div className='ui-content-wrapper'>
        <Wrapper>
          <div className='ui-container' ref={componentRef}>
            <Row itemsCenter>
              <Sidebar>
                <Avatar />
              </Sidebar>
              <Content>
                <Title>George Grigoryan</Title>
                <Descr>
                    Something about me
                </Descr>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>
                <Descr>Student</Descr>
                <Descr isSecondary>Rostov-on-Don</Descr>

                <Descr isPrimary style={{ marginTop: '2rem' }}>
                  
                  grigoryan@sfedu.ru
                </Descr>
                <Descr isPrimary>
                  +8 951 512 30 11
                </Descr>
              </Sidebar>

              <Content>
              <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => seteducationCounter(educationCounter + 1)}
                  style={{ marginTop: '3rem' }}
                >
                  Education:
                </Title>

                {new Array(educationCounter).fill(1).map((_, i) => (
                  <Descr key={i}> {i+1}. Solutions Architect, Stripe. </Descr>
                ))}

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: '3.6rem' }}
                >
                  Work experience:
                </Title>
                {new Array(worksCounter).fill(1).map((_, i) => (
                  <Descr key={i}>{i + 1}. Solutions Architect, Stripe.</Descr>
                ))}

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  style={{ marginTop: '3rem' }}
                >
                  Skills:
                </Title>

                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} />
                ))}
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  )
}
export default App;