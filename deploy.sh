echo "Pre-Build Steps:"
echo "authenticating with AWS ECR..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 396118784488.dkr.ecr.us-east-1.amazonaws.com

echo "Build Steps:"
echo "buildin image..."
docker build -t 396118784488.dkr.ecr.us-east-1.amazonaws.com/app-madeira:latest .

echo "Post-Build Steps:"
echo "pushing image to AWS ECR"
docker push 396118784488.dkr.ecr.us-east-1.amazonaws.com/app-madeira:latest

echo "updating AWS ECS service"
aws ecs update-service --cluster madeira-client-cluster --service madeira-app-sv --force-new-deployment

echo "Done!"