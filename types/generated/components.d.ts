import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAdvantagesFeatureDetails extends Schema.Component {
  collectionName: 'components_components_advantages_feature_details';
  info: {
    displayName: 'Advantages Feature Details';
  };
  attributes: {
    heading: Attribute.String;
    icon: Attribute.Enumeration<
      ['CircleGauge', 'Clock8', 'Package', 'ShieldCheck']
    >;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_form_features';
  info: {
    displayName: 'Advantages  Feature';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ComponentsFormHeroSection extends Schema.Component {
  collectionName: 'components_form_form_hero_sections';
  info: {
    displayName: 'Form Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.String;
  };
}

export interface LayoutAdvantagesSection extends Schema.Component {
  collectionName: 'components_layout_advantages_sections';
  info: {
    displayName: 'Advantages Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    feature: Attribute.Component<'components.feature', true>;
    featureDetails: Attribute.Component<
      'components.advantages-feature-details',
      true
    >;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media<'images'>;
    form: Attribute.Component<'components.form-hero-section'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.advantages-feature-details': ComponentsAdvantagesFeatureDetails;
      'components.feature': ComponentsFeature;
      'components.form-hero-section': ComponentsFormHeroSection;
      'layout.advantages-section': LayoutAdvantagesSection;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
