import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Dimensions,
} from 'react-native';

export default function BookList({navigation: {goBack}}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Book List</Text>
        <Text style={styles.subHeaderText}>Pre-School/Elementary</Text>
        <Text style={styles.authorText}>Blabey, Aaron</Text>
        <Text style={styles.bookTitleText}>
          Pearl Barley and Charlie Parseley
        </Text>
        <Text style={styles.text}>
          A short, sweet story about how two very different people can be good
          friends.
        </Text>
        <Text style={styles.authorText}>Cave, Kathryn</Text>
        <Text style={styles.bookTitleText}>Something Else</Text>
        <Text style={styles.text}>
          Something Else wants to be like everybody else but finds he isn’t.
          This is a lovely story about accepting people’s differences
        </Text>
        <Text style={styles.authorText}>Jenkins, Emily</Text>
        <Text style={styles.bookTitleText}>The Little Bit Scary People</Text>
        <Text style={styles.text}>
          A lovely little story about how some people look or at a little bit
          scary, but if you’d get to know them better, you’d find out they’re
          really not. A great vehicle for enhance perspective taking for little
          ones.
        </Text>
        <Text style={styles.authorText}>Leoni, Leo</Text>
        <Text style={styles.bookTitleText}>Swimmy</Text>
        <Text style={styles.text}>
          This classic story shows how being different can be a strength and how
          friends can band together to protect one another.
        </Text>
        <Text style={styles.authorText}>Lovell, Patty</Text>
        <Text style={styles.bookTitleText}>Stand Tall, Molly Lou Melon</Text>
        <Text style={styles.text}>
          When the class bully at her new school makes fun of her, Molly
          remembers what her grandmother told her and she feels good about
          herself.
        </Text>
        <Text style={styles.authorText}>McCain, Becky</Text>
        <Text style={styles.bookTitleText}>
          Nobody Knew What To Do: A Story About Bullying
        </Text>
        <Text style={styles.text}>
          This story delivers the important message that bystanders can make a
          difference.
        </Text>
        <Text style={styles.authorText}>Nickle, John</Text>
        <Text style={styles.bookTitleText}>Ant Bully</Text>
        <Text style={styles.text}>
          Lucas is picked on by Sid, the neighborhood bully, and takes his anger
          out on a colony of ants. The ants retaliate and teach him a lesson
          about empathy.
        </Text>
        <Text style={styles.authorText}>Otoshi, Kathryn</Text>
        <Text style={styles.bookTitleText}>One</Text>
        <Text style={styles.text}>
          This is a lovely story for preschoolers about how, when you stand up
          for others who aren’t treated well, you can make a positive
          difference.
        </Text>
        <Text style={styles.authorText}>Otoshi, Kathryn</Text>
        <Text style={styles.bookTitleText}>Zero</Text>
        <Text style={styles.text}>
          A great book that shows how everyone has value.
        </Text>
        <Text style={styles.authorText}>Seskin, Steve and Allen Shamblin</Text>
        <Text style={styles.bookTitleText}>Don’t Laugh At Me</Text>
        <Text style={styles.text}>
          This picture book helps kids think twice about teasing and
          name-calling.!
        </Text>
        <Text style={styles.subHeaderText}>Elementary School</Text>
        <Text style={styles.authorText}>Bosch, Carl</Text>
        <Text style={styles.bookTitleText}>Bully on the Bus</Text>
        <Text style={styles.text}>
          Here, the reader gets to choose the outcome of the story when the
          protagonist is confronted by a bully on the school bus.
        </Text>
        <Text style={styles.authorText}>Burnett, Karen Gedig</Text>
        <Text style={styles.bookTitleText}>
          Simon’s Hook; A Story About Teases and Put-downs
        </Text>
        <Text style={styles.text}>
          When Simon gets teased Grandma Rose teaches him how to refuse to “take
          the hook.”
        </Text>
        <Text style={styles.authorText}>Clements, Andrew</Text>
        <Text style={styles.bookTitleText}>Jake Drake, Bully Buster</Text>
        <Text style={styles.text}>
          In the fourth grade, Jake encounters Link Baxter, SuperBully. Jake
          learns how to deal with this bully even though Link never stops being
          one.
        </Text>
        <Text style={styles.authorText}>DePino, Catherine</Text>
        <Text style={styles.bookTitleText}>
          Blue Cheese Breath and Stinky Feet
        </Text>
        <Text style={styles.text}>
          Steve is picked on by a bully and is afraid things will get worse if
          he tells asks for help. His parents come up with a plan to help their
          son.
        </Text>
        <Text style={styles.authorText}>Howe, James</Text>
        <Text style={styles.bookTitleText}>PINKY, REX and the BULLY</Text>
        <Text style={styles.text}>
          Seven-year-old Pinky learns the importance of identity as he defends
          his favorite color, pink, and his friendship with a girl, Rex, from
          the neighborhood bully.
        </Text>
        <Text style={styles.authorText}>Hoose, Phillip and Hannah Hoose</Text>
        <Text style={styles.bookTitleText}>Hey Little Ant</Text>
        <Text style={styles.text}>
          A little ant tries to!convince a boy not to squish him because he has
          feelings and a family, too. The book allows the reader to determine
          the outcome of the story—great opportunities for discussion!
        </Text>
        <Text style={styles.authorText}>Lombard, Jenny</Text>
        <Text style={styles.bookTitleText}>Drita My Homegirl</Text>
        <Text style={styles.text}>
          Drita escapes war-torn Kosovo and ends up going to a New York public
          school. Maxie, an African-American student there, doesn’t want to have
          anything to do with her until they’re paired up for a school project.
          A great story about how friendship can bloom and overcome two very
          different cultures.
        </Text>
        <Text style={styles.authorText}>Ludwig, Trudy</Text>
        <Text style={styles.bookTitleText}>Better Than You</Text>
        <Text style={styles.text}>
          This story shows kids how adopting a “better than you” boastful
          attitude can break friendships rather than build them.
        </Text>
        <Text style={styles.authorText}>Ludwig, Trudy</Text>
        <Text style={styles.bookTitleText}>Just Kidding</Text>
        <Text style={styles.text}>
          A joke that has a sharp edge to it can cut you to pieces. That’s what
          D.J. finds out from his encounters with a smart-aleck classmate. With
          the help of grownups he trusts, D.J. learns how to stand up to put
          downs and make healthier friendship choices
        </Text>
        <Text style={styles.authorText}>Ludwig, Trudy</Text>
        <Text style={styles.bookTitleText}>My Secret Bully</Text>
        <Text style={styles.text}>
          Monica is emotionally bullied by her friend Katie and learns how to
          cope and thrive with the help of her mother. The book also includes
          helpful tips, discussion questions and additional resources for
          parents, teachers and counseling professionals.
        </Text>
        <Text style={styles.authorText}>Ludwig, Trudy</Text>
        <Text style={styles.bookTitleText}>Sorry!</Text>
        <Text style={styles.text}>
          Jack learns that there’s a whole lot more to a real apology than a
          simple “sorry!” This story illustrates how a child can take ownership
          of hurtful behavior and make right his/her wrongs.
        </Text>
        <Text style={styles.authorText}>Ludwig, Trudy</Text>
        <Text style={styles.bookTitleText}>Too Perfect</Text>
        <Text style={styles.text}>
          At first, Maisie thinks Kayla is perfect. But the more she gets to
          know Kayla, the more she begins to question whether being perfect is
          really so wonderful. This book will raise meaningful discussions on
          working to your potential, not to perfection.
        </Text>
        <Text style={styles.authorText}>Ludwig, Trudy</Text>
        <Text style={styles.bookTitleText}>Trouble Talk®</Text>
        <Text style={styles.text}>
          Bailey loves to talk and everything— including everyone is fair game.
          Bailey soon learns that her “trouble talk” (gossiping, spreading
          hurtful rumors, sharing other’s information, etc.) is not the way to
          win lasting friendships.
        </Text>
        <Text style={styles.authorText}>Madonna</Text>
        <Text style={styles.bookTitleText}>The English Roses</Text>
        <Text style={styles.text}>
          An exclusive girls’ club learns a lesson about judging their peers
          before really getting to know them.
        </Text>
        <Text style={styles.authorText}>Madonna</Text>
        <Text style={styles.bookTitleText}>Mr. Peabody's Apples</Text>
        <Text style={styles.text}>
          A young boy learns the power of words when spreading a rumor about his
          teacher and baseball coach Mr. Peabody.
        </Text>
        <Text style={styles.subHeaderText}>Elementary/Middle School</Text>
        <Text style={styles.authorText}>Blume, Judy</Text>
        <Text style={styles.bookTitleText}>Blubber</Text>
        <Text style={styles.text}>
          A realistic story about bullying that takes place among fifth grade
          girls.
        </Text>
        <Text style={styles.authorText}>Codell, Esmé Raji</Text>
        <Text style={styles.bookTitleText}>Sahara Special</Text>
        <Text style={styles.text}>
          While no longer in Special Ed, Sahara Junes has to repeat fifth grade.
          Her new, unconventional teacher opens up her world and her heart to
          celebrate her uniqueness and strengths.
        </Text>
        <Text style={styles.authorText}>Codell, Esme Raji</Text>
        <Text style={styles.bookTitleText}>Vive La Paris</Text>
        <Text style={styles.text}>
          Fifth grader Paris McCray’s older brother is being bullied by a
          younger girl. In her eager efforts to right some wrongs, Paris learns
          a powerful lesson on the dangers of ignorance.
        </Text>
        <Text style={styles.authorText}>Dowell, Frances O’Roark</Text>
        <Text style={styles.bookTitleText}>The Secret Language of Girls</Text>
        <Text style={styles.text}>
          {' '}
          Eleven-year-old Kate can’t understand why her best friend Marylin
          starts treating her like an enemy.
        </Text>
        <Text style={styles.authorText}>DeClements, Barthe</Text>
        <Text style={styles.bookTitleText}>Nothing’s Fair in Fifth Grade</Text>
        <Text style={styles.text}>
          A fifth grade class, repelled by the overweight new student who has
          serious home problems, finally learns to accept her.
        </Text>
        <Text style={styles.authorText}>Estes, Eleanor</Text>
        <Text style={styles.bookTitleText}>The Hundred Dresses</Text>
        <Text style={styles.text}>
          A Newberry Honor’s classic about a group of who pick on someone who is
          a little different. Told from the perspective of the bully’s best
          friend.
        </Text>
        <Text style={styles.authorText}>Flake, Sharon</Text>
        <Text style={styles.bookTitleText}>The Skin I’m In</Text>
        <Text style={styles.text}>
          Seventh grader Maleeka, with the guidance of her teacher, overcomes
          low self-esteem and the bullying behaviors of peers.
        </Text>
        <Text style={styles.authorText}>Gervay, Susanne</Text>
        <Text style={styles.bookTitleText}>I am Jack</Text>
        <Text style={styles.text}>
          Jack, an eleven-year-old boy, is being bullied at school. Caring
          bystanders and grown-ups come to his rescue.
        </Text>
      </ScrollView>
      <View style={{padding: 15}}>
        <Pressable style={styles.buttons} onPress={() => goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
    paddingTop: 5,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 70,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    fontWeight: '700',
    paddingBottom: 15,
  },
  subHeaderText: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    paddingTop: 20,
  },
  authorText: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    paddingTop: 30,
  },
  bookTitleText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#96C5FC',
    padding: 5,
  },
  buttons: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#7C97CE',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});
