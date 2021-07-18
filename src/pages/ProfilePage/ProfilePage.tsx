import React, {useState} from 'react';
import { $t } from '../../lib/i18n';
import './ProfilePage.scss'
import {Button} from "../../components/Button/Button";
import {ProfileSettings} from "./components/ProfileSettings/ProfileSettings";
import {ProfileHistory} from "./components/ProfileHistory/ProfileHistory";
import {ProfileDeposit} from "./components/ProfileDeposit/ProfileDeposit";
import {ProfileReferral} from "./components/ProfileReferral/ProfileReferral";
import {UserWallets} from "./components/UserWallets/UserWallets";

export const ProfilePage = () => {

    const [page, setPage] = useState<string>('settings')

    const tabs = [
        {
            title: 'Settings',
            iterator: 'settings'
        },
        {
            title: 'My game history',
            iterator: 'history'
        },
        {
            title: 'Deposit',
            iterator: 'deposit'
        },
        {
            title: 'Wallets',
            iterator: 'wallets'
        },
        {
            title: 'Referral',
            iterator: 'referral'
        },
    ]

    const changeTabHandler = (iterator: string) => {
        setPage(iterator)
    }

  return (
    <div className={'profile'}>

        <div className="profile__header">
            <div className="profile__header_tabs">
                {tabs.map((item: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`profile__header_tabs-tab ${item.iterator === page ? 'active' : ''}`}
                            onClick={() => changeTabHandler(item.iterator)}
                        >
                            {$t(item.title)}
                        </div>
                    )
                })}
            </div>
            <div className="profile__header_buttons">
                {page === 'settings' ?
                    <Button light>
                        {$t('Save')}
                    </Button> : null
                }
            </div>
        </div>

        <div className="profile__content">
            {page === 'settings' ?
                <ProfileSettings /> : null
            }

            {page === 'history' ?
                <ProfileHistory /> : null
            }

            {page === 'deposit' ?
                <ProfileDeposit /> : null
            }

            {page === 'wallets' ?
                <UserWallets /> : null
            }

            {page === 'referral' ?
                <ProfileReferral /> : null
            }
        </div>
    </div>
  )
}