import { AddTemplate} from '../components/SprintStories/AddTemplate';
import { LandingPage} from '../components/SprintStories/LandingPage';
import { Onboarding } from './SprintStories/Onboarding';
import { ProfileEdit} from './SprintStories/ProfileEdit';
import {Settings} from './SprintStories/Settings';
import {UserProfile} from './SprintStories/UserProfile';
import './Sprint.css';

export function Sprint() {
    return (
<div className="Sprint">
    <h2>Sprint stories</h2>
    <Onboarding />
    <LandingPage/>
    <AddTemplate/>
    <ProfileEdit/>
    <Settings/>
    <UserProfile/>
</div>

    );
}
