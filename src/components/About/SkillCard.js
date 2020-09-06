import React from "react";
import { Card, Image } from "semantic-ui-react";
function SkillCard({
  imageSrc,
  FieldTitle,
  SkillOne,
  SkillTwo,
  SkillThree,
  SkillFour,
}) {
  return (
    <div>
      <Card>
        <Image src={imageSrc} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{FieldTitle}</Card.Header>

          <Card.Description>{SkillOne}</Card.Description>
          <Card.Description>{SkillTwo}</Card.Description>
          <Card.Description>{SkillThree}</Card.Description>
          <Card.Description>{SkillFour}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default SkillCard;
