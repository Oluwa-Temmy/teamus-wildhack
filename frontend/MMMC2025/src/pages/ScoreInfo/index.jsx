import { PageContainer, Header, Title, Subtitle, ContentSection, IconTitle, Paragraph, List, Quote } from './styles'
import { MdVerified, MdHelpOutline, MdOutlineTipsAndUpdates } from 'react-icons/md'

export function Score() {
  return (
    <PageContainer>
      <Header>
        <Title>Understand Your Credit Score</Title>
        <Subtitle>Master your score, unlock better financial opportunities</Subtitle>
      </Header>

      <ContentSection>
        <IconTitle>
          <MdVerified size={32} />
          <h2>What is a Credit Score?</h2>
        </IconTitle>
        <Paragraph>
          A credit score is a three-digit number that reflects your creditworthiness — how likely you are to repay borrowed money. The most common type is the FICO® Score, which ranges from <strong>300 to 850</strong>. Lenders use it to determine how much you can borrow, your interest rate, and your repayment terms. In 2023, the average FICO® Score in the U.S. was <strong>715</strong>.
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdHelpOutline size={32} />
          <h2>Does checking your score hurt it?</h2>
        </IconTitle>
        <Paragraph>
          No — <strong>checking your own credit score does NOT harm it</strong>. This is called a "soft inquiry" and has no impact on your score. In fact, monitoring your score regularly is a smart way to track your financial health and prevent identity theft.
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <IconTitle>
          <MdOutlineTipsAndUpdates size={32} />
          <h2>What impacts your score the most?</h2>
        </IconTitle>
        <List>
          <li><strong>Payment History (35%)</strong> – Always pay your bills on time. Even one late payment can hurt.</li>
          <li><strong>Amounts Owed (30%)</strong> – Keep your credit usage below 30% of your limit.</li>
          <li><strong>Length of Credit History (15%)</strong> – The older your accounts, the better.</li>
          <li><strong>Credit Mix (10%)</strong> – A variety of credit types (cards, loans) is ideal.</li>
          <li><strong>New Credit (10%)</strong> – Opening too many accounts at once can be risky.</li>
        </List>
      </ContentSection>

      <Quote>
        💡 The #1 rule: <strong>Pay your credit card bills on time</strong>. It's the simplest way to protect and improve your score.
      </Quote>
    </PageContainer>
  )
}