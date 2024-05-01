interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'yakeke.running',
  siteUrl: 'https://www.instagram.com/yakeke.running/',
  logo: 'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-19/440977547_383024668069113_2516382902428045556_n.jpg?stp=dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=qtzBZO-BkGsQ7kNvgH49Ver&_nc_ht=scontent-tpe1-1.cdninstagram.com&oh=00_AfBTuIFjyad46m3aQXVA5fbxVZNl5AgtZ6imL1qFqgJdnQ&oe=6637C8AA',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yakeke.running/',
    },
  ],
};

export default data;
