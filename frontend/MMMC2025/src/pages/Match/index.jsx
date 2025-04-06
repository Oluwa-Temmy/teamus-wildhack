import { useNavigate } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { InputGroup, BackBtn, Header, Title, Subtitle, FormArea, Container, Content } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Match() {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <BackBtn onClick={() => navigate('/dashboard')}>
          <MdArrowBack size={24} />
        </BackBtn>

        <Header>
          <Title>Let’s find your perfect match</Title>
          <Subtitle>Answer a few quick questions and discover the credit card that fits your lifestyle.</Subtitle>
        </Header>

        <FormArea>
          <div>
            <InputGroup>
              <h3>How often do you travel?</h3>
              <Input
                type="radio"
                value="Never"
                answer="Never"
                name="travelFrequency"
              />
              <Input
                type="radio"
                value="Rarely"
                answer="Rarely"
                name="travelFrequency"
              />
              <Input
                type="radio"
                value="Once a year"
                answer="Once a year"
                name="travelFrequency"
              />
              <Input
                type="radio"
                value="Every month"
                answer="Every month"
                name="travelFrequency"
              />
              <Input
                type="radio"
                value="Every week"
                answer="Every week"
                name="travelFrequency"
              />
            </InputGroup>
            <InputGroup>
              <h3>Do you have any credit cards already?</h3>
                <Input
                  type="radio"
                  value="Yes"
                  answer="Yes"
                  name="holdsCards"
                />
                <Input
                  type="radio"
                  value="No"
                  answer="No"
                  name="holdsCards"
                  />
            </InputGroup>
            <InputGroup>
              <h3>If you have a credit card(s), which bank?(s)</h3>
                {/* <RadioGroup></RadioGroup> */}
                <Input
                  type="checkbox"
                  value="Yes"
                  answer="Capitol One Bank"
                />
                <Input
                  type="checkbox"
                  placeholder="No"
                  answer="Discover"
                />
                <Input
                  type="checkbox"
                  placeholder="No"
                  answer="U.S. Bank"
                />
                <Input
                  type="checkbox"
                  placeholder="No"
                  answer="Bank of America"
                />
                <Input
                  type="checkbox"
                  placeholder="No"
                  answer="Citibank"
                />
                <Input
                  type="checkbox"
                  placeholder="No"
                  answer="Other"
                />
            </InputGroup>
            <InputGroup>
              <h3>What is your credit score?</h3>
              <Input
                  type="radio"
                  placeholder="None"
                  answer="None"
                  name="creditScore"
              />
              <Input
                  type="radio"
                  placeholder="Poor"
                  answer="Poor(<600)"
                  name="creditScore"
              />
              <Input
                  type="radio"
                  placeholder="Fair"
                  answer="Fair(>650)"
                  name="creditScore"
              />
              <Input
                  type="radio"
                  placeholder="Good"
                  answer="Good(>700)"
                  name="creditScore"
              />
              <Input
                  type="radio"
                  placeholder="Excellent"
                  answer="Excellent(>750)"
                  name="creditScore"
              />
            </InputGroup>
            <InputGroup>
              <h3>Would you like to open a new credit card?</h3>
                <Input
                  type="radio"
                  value="Yes"
                  answer="Yes"
                  name="newCard"
                />
                <Input
                  type="radio"
                  value="No"
                  answer="No"
                  name="newCard"
                  />
            </InputGroup>
            <InputGroup>
              <h3>Do you think having a credit card is necessary to build a financial foundation or reputation?</h3>
              <Input
              type="radio"
              value="Yes"
              answer="Yes"
              name="creditImportance"/>
              <Input
              type="radio"
              value="No"
              answer="No"
              name="creditImportance"/>
            </InputGroup>
            <InputGroup>
              <h3>Would you be interested in learning more about how to build your credit from scratch?</h3>
              <Input
              type="radio"
              value="Yes"
              answer="Yes"
              name="creditImportance"/>
              <Input
              type="radio"
              value="No"
              answer="No"
              name="creditImportance"/>
            </InputGroup>
            <InputGroup>
              <h3>Do you think credit cards are helpful or risky?</h3>
              <Input
              type="radio"
              value="Helpful"
              answer="Helpful"
              name="riskAssesment"/>
              <Input
              type="radio"
              value="Risky"
              answer="Risky"
              name="riskAssesment"/>
            </InputGroup>
            <InputGroup>
              <h3>Do you know how to build your credit if you don’t have any yet?</h3>
              <Input
              type="radio"
              value="Yes"
              answer="Yes"
              name="doYouKnow"/>
              <Input
              type="radio"
              value="No"
              answer="No"
              name="doYouKnow"/>
            </InputGroup>
          </div>
          <Button text={"Submit"} onClick={() => console.log("I have been submitted")}/>
        </FormArea>
      </Content>
    </Container>
  )
}
