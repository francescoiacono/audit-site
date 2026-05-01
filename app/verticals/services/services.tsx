import { Accessibility, Code2, Gauge, SearchCheck } from "lucide-react";

import { useCopy } from "@/shared/i18n";
import { Wrapper } from "@/shared/ui";
import { styles } from "./services.style";

const serviceIcons = [SearchCheck, Accessibility, Gauge, Code2] as const;

/** Renders the service overview section for the home page. */
export const Services = () => {
  const { services } = useCopy();

  return (
    <section id="services" aria-labelledby="services-title" className={styles}>
      <Wrapper data-slot="inner">
        <div data-slot="heading">
          <h2 id="services-title">{services.title}</h2>
          <p data-slot="description">{services.description}</p>
        </div>

        <ul data-slot="list">
          {services.items.map(({ description, title }, index) => {
            const Icon = serviceIcons[index] ?? Code2;

            return (
              <li key={title} data-slot="item">
                <span aria-hidden="true" data-slot="icon">
                  <Icon focusable="false" size={30} strokeWidth={2} />
                </span>
                <div data-slot="item-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
};
