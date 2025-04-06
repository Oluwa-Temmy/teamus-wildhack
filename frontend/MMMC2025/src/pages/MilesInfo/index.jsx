import { PageContainer, Header, Title, Subtitle, ContentSection, IconTitle, Paragraph, List, Quote } from './styles'
import { MdAirplanemodeActive, MdAddCard, MdHighlightOff, MdTrendingUp } from 'react-icons/md'

export function Miles() {
  return (
    <PageContainer>
      <Header>
        <Title>Mastering Airline Miles</Title>
        <Subtitle>Earn more, fly smarter — turn everyday spending into unforgettable trips</Subtitle>
      </Header>

      <ContentSection>
        <IconTitle>
          <MdAirplanemodeActive size={32} />
          <h2>What are Airline Miles?</h2>
        </IconTitle>
        <Paragraph>
          Airline miles (or travel points) are a form of reward earned from certain credit cards or frequent flyer programs. They're usually redeemable for flights, upgrades, hotel stays, or other travel-related perks. Unlike cash back, miles are often tied to loyalty programs and can unlock high-value travel opportunities — when used wisely.
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdAddCard size={32} />
          <h2>How to Earn Miles</h2>
        </IconTitle>
        <List>
          <li><strong>Use travel rewards credit cards:</strong> Cards like Latam Pass, Smiles, Azul Itaucard and others offer miles per dollar spent.</li>
          <li><strong>Bonus categories:</strong> Some cards give more miles for flights, dining, hotels or international purchases.</li>
          <li><strong>Welcome bonuses:</strong> Earn thousands of miles by meeting a minimum spending requirement within the first months.</li>
          <li><strong>Airline shopping portals:</strong> Buy online through partner stores to earn extra miles without flying.</li>
          <li><strong>Traveling:</strong> Book flights with partner airlines and add your frequent flyer number to earn miles the old-fashioned way.</li>
        </List>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdTrendingUp size={32} />
          <h2>How to Use Your Miles Wisely</h2>
        </IconTitle>
        <List>
          <li><strong>Plan in advance:</strong> Booking early often gives you access to better availability and lower redemption rates.</li>
          <li><strong>Be flexible:</strong> If your dates are open, you can find much better deals and promo redemptions.</li>
          <li><strong>Use for long-haul or international flights:</strong> Miles often deliver the best value on expensive trips.</li>
          <li><strong>Check transfer partners:</strong> Some credit card points can be transferred to airline programs at better conversion rates.</li>
          <li><strong>Compare point value:</strong> Always calculate if you're getting at least $0.01 per mile — or better.</li>
        </List>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdHighlightOff size={32} />
          <h2>Common Mistakes to Avoid</h2>
        </IconTitle>
        <List>
          <li>Letting miles expire — most programs have expiration policies if you don’t earn/redeem for 12–24 months.</li>
          <li>Redeeming miles for gift cards or merchandise — this gives poor value compared to travel redemptions.</li>
          <li>Spending just to earn miles — if you overspend, the rewards don’t make up for the debt or interest.</li>
        </List>
      </ContentSection>

      <Quote>
        ✈️ Turn your daily coffee, groceries, and bills into your next getaway — but only if you plan smart.
      </Quote>
    </PageContainer>
  )
}
