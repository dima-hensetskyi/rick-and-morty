import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';

interface PaginationComponentProps {
	type: string;
	activePage: number;
	count: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
	totalPages,
	count,
	onPageChange,
	activePage,
	type,
}) => {
	const getRange = (from: number, to: number, step: number = 1): number[] => {
		let i = from;
		const range = [];

		while (i <= to) {
			range.push(i);
			i += step;
		}
		return range;
	};

	const onClickHandler = (page: number, e?: React.MouseEvent) => {
		onPageChange(page);
	};

	return (
		<Container>
			<Row>
				<Col className="col-12 col-md-6">
					<h3 className="border-right border-danger m-0 my-4">
						<span className="text-secondary">{count} </span>
						{type.slice(0, 1).toUpperCase() + type.slice(1)} |{' '}
						<span className="text-secondary">{`Page ${
							activePage > totalPages ? onPageChange(1) : activePage
						} / ${totalPages}`}</span>
					</h3>
				</Col>
				<Col>
					<Pagination className="my-4 float-end">
						<Pagination.First
							onClick={() => onClickHandler(1)}
							disabled={activePage < 4}
						/>
						<Pagination.Prev
							disabled={activePage < 2}
							onClick={() => onClickHandler(activePage - 1)}
						/>
						{totalPages <= 4 && (
							<>
								{getRange(1, totalPages).map((page) => (
									<Pagination.Item
										active={page === activePage}
										key={page}
										onClick={() => onClickHandler(page)}
									>
										{page}
									</Pagination.Item>
								))}
							</>
						)}
						{activePage <= 3 && totalPages > 4 && (
							<>
								{getRange(1, 4).map((page) => (
									<Pagination.Item
										active={page === activePage}
										key={page}
										onClick={() => onClickHandler(page)}
									>
										{page}
									</Pagination.Item>
								))}
								<Pagination.Ellipsis onClick={() => onClickHandler(activePage + 3)} />
							</>
						)}
						{activePage > 3 && activePage < totalPages - 2 && (
							<>
								<Pagination.Ellipsis onClick={() => onClickHandler(activePage - 3)} />
								{getRange(activePage - 1, activePage + 1).map((page) => (
									<Pagination.Item
										active={page === activePage}
										key={page}
										onClick={() => onClickHandler(page)}
									>
										{page}
									</Pagination.Item>
								))}
								<Pagination.Ellipsis onClick={() => onClickHandler(activePage + 3)} />
							</>
						)}
						{activePage >= totalPages - 2 && totalPages > 4 && (
							<>
								<Pagination.Ellipsis onClick={() => onClickHandler(activePage - 3)} />
								{getRange(totalPages - 3, totalPages).map((page) => (
									<Pagination.Item
										active={page === activePage}
										key={page}
										onClick={() => onClickHandler(page)}
									>
										{page}
									</Pagination.Item>
								))}
							</>
						)}
						<Pagination.Next
							disabled={activePage === totalPages}
							onClick={() => onClickHandler(activePage + 1)}
						/>
						<Pagination.Last
							onClick={() => onClickHandler(totalPages)}
							disabled={activePage === totalPages}
						/>
					</Pagination>
				</Col>
			</Row>
		</Container>
	);
};
