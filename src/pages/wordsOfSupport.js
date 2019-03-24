import React, { Fragment } from 'react';

const cards = [
  {
    id: 1,
    title: 'Naming Emotions',
    description: "Guessing a person’s feelings based on their description of the situation and your perception of their emotional state to be.",
    details:
      <Fragment>
        <p>
          This can help friends acknowledge their feelings, thus making their emotions more manageable.
        </p>
        <p>
          Remember that the person may correct you, and their correction is valid.
        </p>
        <p>
          For example:
        </p>
        <p>
          Friend: I hate my sister! She is constantly taking my clothes without asking me and acts like an angel in front of my parents.
        </p>
        <p>
          You: I’m guessing you feel pretty hurt by her actions. I would feel incredibly frustrated as well.
        </p>
      </Fragment>
  },
  {
    id: 2,
    title: 'Validation & Hope',
    description: "Recognition and acceptance of your friend’s thoughts and feelings.",
    details: '',
    closed: true
  },
  {
    id: 3,
    title: 'Mirroring',
    description: "Repeat back to your friend, in their own words, the idea that they just expressed.",
    details: '',
    closed: true
  }
]

export default cards
