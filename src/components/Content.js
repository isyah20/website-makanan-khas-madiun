import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gbr1 from './gbr1.jpeg';
import gbr2 from './gbr2.jpg';
import lontong from './lontong.webp';

function content() {
  return (
    <Row className="flex-md-row">
        <Col>
          <Card>
            <Card.Img variant="top" src={gbr1} height={400}/>
            <Card.Body>
              <Card.Title>Nasi Pecel</Card.Title>
              <Card.Text>
			  Pecel adalah makanan khas Jawa yang menggunakan bumbu 
			  sambal kacang sebagai bahan utamanya yang dicampur dengan aneka jenis sayuran.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={gbr2}  height={400} />
            <Card.Body>
              <Card.Title>Brem</Card.Title>
              <Card.Text>
			  Brem adalah air perasan ketan yang telah mengalami fermentasi (tapai); proses fermentasi (pemeraman)cairan ini lebih lanjut dapat meningkatkan kadar alkoholnya; 
			  juga dipergunakan untuk menamai makanan padat yang berasal dari air perasan tersebut (brem) 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={lontong} height={400} />
            <Card.Body>
              <Card.Title>Lontong</Card.Title>
              <Card.Text>
			  Lontong adalah makanan khas Indonesia dari beras yang berkembang oleh masyarakat Jawa. 
			  Lontong umumnya disajikan dengan sate, rujak, rendang atau gulai kambing. Lontong terbuat dari beras yang dibungkus dalam daun pisang dan dikukus di atas air mendidih selama beberapa jam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default content;