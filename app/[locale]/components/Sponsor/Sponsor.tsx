import PersonsCard from '@/app/components/PersonsCard/PersonsCard'
import { sponsors } from '@/data/sponsorsData'

const Sponsor = () => {
  return (
    <div className={'space-y-2'}>
      {
        sponsors.special && <PersonsCard persons={sponsors.special} title='Special Sponsors' avatar='large' />
      }
      {
        sponsors.platinum && <PersonsCard persons={sponsors.platinum} title='Platinum Sponsors' />
      }
      {
        sponsors.gold && <PersonsCard persons={sponsors.gold} title='Gold Sponsors' />
      }
      {
        sponsors.silver && <PersonsCard persons={sponsors.silver} title='Silver Sponsors' />
      }
      {
        sponsors.sponsors && <PersonsCard persons={sponsors.sponsors} title='Sponsors' />
      }
    </div>
  )
}

export default Sponsor