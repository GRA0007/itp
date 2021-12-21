import { useTranslation } from 'react-i18next'

import {
  Heading as H,
  Main,
  Wrapper,
  ExternalLink as A,
} from 'components'

const Privacy = () => {
  const { t } = useTranslation('privacy')

  return (
    <Main>
      <Wrapper>
        <H>{t('title')}</H>

        <H as="h2">ilo toki pona</H>
        <p>This SERVICE is provided by jan Benji at no cost and is intended for use as is.</p>
        <p>This page is used to inform visitors regarding the policies of the collection, use, and disclosure of Personal Information if using the Service.</p>
        <p>If you choose to use the Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that is collected is used for providing and improving the Service. Your information will not be used or shared with anyone except as described in this Privacy Policy.</p>
        
        <H as="h2">Information Collection and Use</H>
        <p>The Service uses third party services that may collect information used to identify you.</p>
        <p>Links to privacy policies of the third party service providers used by the Service:</p>
        <ul>
          <li><A href="https://www.google.com/policies/privacy/">Google Play Services</A></li>
        </ul>

        <H as="h2">Log Data</H>
        <p>When you use the Service, in the case of an error, data and information is collected to improve the Service, which may include your IP address, device name, operating system version, app configuration and the time and date of the error.</p>
        
        <H as="h2">Cookies</H>
        <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
        <p>Cookies are used by Google services including Google Analytics to track you across the web and provide anonymous statistics to improve the Service.</p>
        
        <H as="h2">Service Providers</H>
        <p>Third-party companies may be employed for the following reasons:</p>
        <ul>
          <li>To facilitate the Service</li>
          <li>To provide the Service on our behalf</li>
          <li>To perform Service-related services</li>
          <li>To assist in analyzing how the Service is used</li>
        </ul>
        <p>To perform these tasks, the third parties may have access to your Personal Information, but are obligated not to disclose or use this information for any purpose except the above.</p>
        
        <H as="h2">Security</H>
        <p>Personal Information that is shared via the Service is protected, however remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, so take care when sharing Personal Information.</p>

        <H as="h2">Links to Other Sites</H>
        <p>The Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by the Service. Therefore, you are advised to review the Privacy Policy of these websites.</p>
        
        <H as="h2">Children's Privacy</H>
        <p>The Service does not address anyone under the age of 13. Personally identifiable information is not knowingly collected from children under 13. If discovered that a child under 13 has provided the Service with personal information, such information will be immediately deleted from the servers. If you are a parent or guardian and you are aware that your child has provided the Service with personal information, please contact us using the details below so that this information can be removed.</p>
        
        <H as="h2">Changes to This Privacy Policy</H>
        <p>This Privacy Policy may be updated from time to time. Thus, you are advised to review this page periodically for any changes.</p>
        <p>Last updated: 2021-12-21</p>

        <H as="h2">Contact Us</H>
        <p>If you have any questions or suggestions about the Privacy Policy, do not hesitate to contact me at ben@bengrant.dev.</p>
      </Wrapper>
    </Main>
  )
}

export default Privacy