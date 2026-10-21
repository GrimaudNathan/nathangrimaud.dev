import { memo } from 'react';
import GlitchText from '../GlitchText/GlitchText';

interface SkillItemProps {
  skill: string;
}

function SkillItemImpl({ skill }: SkillItemProps) {
  return (
    <GlitchText
      animationDuration={0.28}
      className="font-mono text-2xl font-bold text-black md:text-3xl lg:text-4xl"
    >
      {skill}
    </GlitchText>
  );
}

export const SkillItem = memo(SkillItemImpl);
