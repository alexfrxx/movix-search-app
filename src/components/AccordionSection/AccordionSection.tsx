import * as Accordion from '@radix-ui/react-accordion';
import Container from '../Container/Container';
import css from './AccordionSection.module.css';

export default function AccordionSection() {
  return (
    <section className={css.accordion}>
      <Container>
        <h2 className={css.title}>Frequently asked questions:</h2>
        <Accordion.Root type="single" collapsible className={css.list}>
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <Accordion.Trigger className={css.button}>
                1. How can i search for a movie?
                <span className={css.icon}>+</span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={css.content}>
              <p>
                Enter the movie title in the search bar and press Enter or click
                the search button. The app will display movies matching your
                search query.
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <Accordion.Trigger className={css.button}>
                2. Where does the movie information come from?
                <span className={css.icon}>+</span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={css.content}>
              <p>
                Movie information, including titles, descriptions, ratings,
                release dates, and posters, is provided by The Movie Database
                (TMDB).
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Header>
              <Accordion.Trigger className={css.button}>
                3. Can I watch movies directly in the app?
                <span className={css.icon}>+</span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={css.content}>
              <p>
                No. This application is designed for discovering and exploring
                movies. It does not provide movie streaming or downloads.
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-4">
            <Accordion.Header>
              <Accordion.Trigger className={css.button}>
                4. How can I find more information about a movie?
                <span className={css.icon}>+</span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={css.content}>
              <p>
                No. This application is designed for discovering and exploring
                movies. It does not provide movie streaming or downloads.
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-5" className={css.item}>
            <Accordion.Header>
              <Accordion.Trigger className={css.button}>
                5. Why can't I find a particular movie?
                <span className={css.icon}>+</span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={css.content}>
              <p>
                Make sure the movie title is spelled correctly and try using a
                shorter or more general search query. The available information
                depends on the data provided by TMDB.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Container>
    </section>
  );
}
