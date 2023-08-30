import { SystemResponse } from '@voiceflow/react-chat';
export interface TestProps {
  url: string;
}

export const Testmessage: React.FC<TestProps> = ({ url }) => {
  return <SystemResponse.SystemMessage avatar="" timestamp={0} withImage={false} message={{ type: 'text',  text: url }} />;
};
