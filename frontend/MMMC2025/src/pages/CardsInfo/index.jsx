import { PageContainer, Container, Header, Title, Subtitle, ContentSection, IconTitle, Paragraph, List, Quote } from './styles'
import { MdAttachMoney, MdCardGiftcard, MdRedeem } from 'react-icons/md'
import Navbar from '../../components/Navbar'

export function Cards() {
  return (
    <Container>
      <Navbar />
      <PageContainer>
      <Header>
        <Title>Credit Cards & Rewards: From A to Z</Title>
        <Subtitle>Understand how credit cards work and how to make the most of your rewards</Subtitle>
      </Header>

      <ContentSection>
        <IconTitle>
          <MdAttachMoney size={32} />
          <h2>What is a Credit Card?</h2>
        </IconTitle>
        <Paragraph>
          A credit card allows you to borrow money from a financial institution to make purchases, with the agreement that you’ll pay it back later — ideally on time. When used responsibly, credit cards are a powerful tool for building credit history, earning rewards, and managing short-term cash flow.
        </Paragraph>
        <Paragraph>
          Unlike debit cards, credit cards don’t draw from your bank balance. Instead, they work like a short-term loan. The key to using them wisely is to <strong>pay your full balance by the due date</strong> to avoid interest and fees.
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdCardGiftcard size={32} />
          <h2>What are Credit Card Rewards?</h2>
        </IconTitle>
        <Paragraph>
          Credit card rewards are incentives that give you something back for every dollar you spend. There are typically three main types:
        </Paragraph>
        <List>
          <li><strong>Cash back:</strong> Earn a percentage of your spending back in money. Example: 2% back on groceries = $2 for every $100 spent.</li>
          <li><strong>Points:</strong> Earn points based on your spending that can be redeemed later for travel, shopping, or more.</li>
          <li><strong>Miles:</strong> A type of points typically used with travel credit cards. Great for flights, hotels, and vacation perks.</li>
        </List>
        <Paragraph>
          Some cards offer boosted rewards on specific categories like food, gas, or streaming. The more you align your spending with the card’s categories, the more you earn.
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdRedeem size={32} />
          <h2>How to Redeem Your Rewards</h2>
        </IconTitle>
        <Paragraph>
          There are many ways to redeem credit card points and miles. Some of the most common include:
        </Paragraph>
        <List>
          <li>Statement credits (reduce your bill)</li>
          <li>Travel bookings (flights, hotels, rental cars)</li>
          <li>Shopping portals (online stores and gift cards)</li>
          <li>Charitable donations</li>
          <li>Even cash deposits in your bank account</li>
        </List>
        <Paragraph>
          💡 <strong>Tip:</strong> Some redemptions (like travel) offer better value per point than others. Always compare!
        </Paragraph>
      </ContentSection>

      <Quote>
        ✨ Spend smarter, not just more. Use the right card, earn rewards, and make your money work for you.
      </Quote>
    </PageContainer>
  </Container>
  )
}
